# Slidev Multi-Course Hub Sync Script
# This script scans Obsidian course folders, copies slide files to slidev-hub, and optionally pushes to GitHub.

$ErrorActionPreference = "Stop"

# 1. Define Paths
$obsidianOutputDir = "d:\AI\Joey\06output"
$hubSlidesDir = "d:\AI\slidev-hub\slides"

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host " Syncing Obsidian presentations to slidev-hub..." -ForegroundColor Cyan
Write-Host "==========================================" -ForegroundColor Cyan

if (-not (Test-Path $obsidianOutputDir)) {
    Write-Error "Obsidian output directory not found: $obsidianOutputDir"
    exit 1
}

# Ensure slides directory exists
if (-not (Test-Path $hubSlidesDir)) {
    New-Item -ItemType Directory -Force -Path $hubSlidesDir | Out-Null
}

# 2. Scan and Copy
$courseFolders = Get-ChildItem -Path $obsidianOutputDir -Directory
$syncedCount = 0

foreach ($folder in $courseFolders) {
    $outlineFile = Join-Path $folder.FullName "deck-outline.md"
    if (Test-Path $outlineFile) {
        $courseName = $folder.Name
        $targetCourseDir = Join-Path $hubSlidesDir $courseName
        $targetSlidesFile = Join-Path $targetCourseDir "slides.md"

        Write-Host "Found course [$courseName]... " -NoNewline -ForegroundColor Yellow

        # Create target directory
        if (-not (Test-Path $targetCourseDir)) {
            New-Item -ItemType Directory -Force -Path $targetCourseDir | Out-Null
        }

        # Copy slides.md
        Copy-Item -Path $outlineFile -Destination $targetSlidesFile -Force

        # Copy assets (images, public, assets, img)
        $assetDirs = @("images", "public", "assets", "img")
        foreach ($assetName in $assetDirs) {
            $srcAsset = Join-Path $folder.FullName $assetName
            if (Test-Path $srcAsset) {
                $destAsset = Join-Path $targetCourseDir $assetName
                Copy-Item -Path $srcAsset -Destination $destAsset -Recurse -Force | Out-Null
            }
        }

        Write-Host "Synced successfully! OK" -ForegroundColor Green
        $syncedCount++
    }
}

Write-Host "==========================================" -ForegroundColor Cyan
Write-Host "Total synced courses: $syncedCount" -ForegroundColor Green
Write-Host "==========================================" -ForegroundColor Cyan

# 3. Ask for Git push
if ($syncedCount -gt 0) {
    # Check if .git folder exists in current directory
    if (Test-Path ".git") {
        # Check status without generating errors on stderr
        $gitStatus = git status --porcelain 2>$null
        if ($gitStatus) {
            Write-Host "Changes detected in git repository. Do you want to commit and push to GitHub?" -ForegroundColor Yellow
            $choice = Read-Host "[Y] Commit and Push / [N] Do nothing"
            if ($choice -eq 'y' -or $choice -eq 'Y') {
                Write-Host "Committing changes..." -ForegroundColor Cyan
                git add .
                git commit -m "Auto-sync slides at $(Get-Date -Format 'yyyy-MM-dd HH:mm:ss')"
                Write-Host "Pushing to remote GitHub..." -ForegroundColor Cyan
                git push
                Write-Host "Pushed successfully! Cloudflare Pages build will trigger in background. OK" -ForegroundColor Green
            }
        } else {
            Write-Host "No changes detected. Git repository is clean." -ForegroundColor Gray
        }
    } else {
        Write-Host "No Git repository found in slidev-hub directory. Skipping push." -ForegroundColor Gray
    }
}
