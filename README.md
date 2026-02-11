# init-camapp-20260211-0120

## Problem
Users need a browser-based web application to access their PC camera, view live feed, and capture photos and videos through a simple, intuitive interface.

## Goals
- Enable users to activate their PC camera from within a web browser
- Provide real-time camera feed display
- Allow users to capture still photos from the camera feed in JPEG format
- Allow users to record video from the camera feed in MP4 format (or WebM for Safari)
- Support video recordings up to 30 minutes in length
- Provide intuitive and easy-to-use interface for camera selection and capture
- Support maximum available camera resolution including 720p, 1080p, and 4K

## Requirements
- **FR-01**: Application must run in modern web browsers without requiring plugins or extensions
- **FR-02**: Provide a button to request and enable PC camera access
- **FR-03**: Display live camera feed in real-time once camera is enabled
- **FR-04**: Provide a photo capture button positioned to the right side of the camera feed
- **FR-05**: Provide a video capture button positioned below the camera feed
- **FR-06**: Capture and save still images in JPEG format when photo button is clicked
- **FR-07**: Start and stop video recording in MP4 format (or WebM for Safari) when video button is clicked
- **FR-08**: Automatically download captured photos to browser's default download folder
- **FR-09**: Automatically download recorded videos to browser's default download folder
- **FR-10**: Display visual feedback when camera is active
- **FR-11**: Handle camera permission denial gracefully with user messaging
- **FR-12**: Provide a camera selector dropdown displaying camera names when multiple cameras are available
- **FR-13**: Position camera selector above the capture buttons
- **FR-14**: Support video recordings up to 30 minutes maximum duration
- **FR-15**: Prevent video recording from exceeding 30-minute limit with appropriate user notification
- **FR-16**: Display recording duration timer during video capture
- **FR-17**: Allow users to switch between available cameras using the selector
- **FR-18**: Generate file names using format: CamerApp-YYYY-MM-DD-HHMMSS.extension (e.g., CamerApp-2026-02-10-183648.jpg)
- **FR-19**: Display error message and allow user to choose different folder when download folder is inaccessible
- **FR-20**: Cancel active recording and discard buffered data when user closes browser tab during recording
- **FR-21**: Continue recording when user switches to another browser tab (recording persists until 30-minute limit)
- **FR-22**: Request maximum available camera resolution (720p, 1080p, or 4K based on camera capabilities)
- **FR-23**: Display human-understandable error messages for all error conditions
- **FR-24**: Disable photo capture button when video recording is in progress
- **FR-25**: Debounce photo capture to prevent serial captures faster than 1 per second
- **FR-26**: Display error message when camera resolution is below 720p minimum requirement
- **FR-27**: Allow 4K video recording to continue for full 30 minutes even if system resources are constrained

## Non-Functional Requirements
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 
- **General**: 

## Getting Started

```bash
npm install
npm run dev
```

## Endpoints

- `GET /` — Initiative info
- `GET /health` — Health check
- `GET /api/fr-01` — FR-01: Application must run in modern web browsers without requiring plugins or extensions
- `GET /api/fr-02` — FR-02: Provide a button to request and enable PC camera access
- `GET /api/fr-03` — FR-03: Display live camera feed in real-time once camera is enabled
- `GET /api/fr-04` — FR-04: Provide a photo capture button positioned to the right side of the camera feed
- `GET /api/fr-05` — FR-05: Provide a video capture button positioned below the camera feed
- `GET /api/fr-06` — FR-06: Capture and save still images in JPEG format when photo button is clicked
- `GET /api/fr-07` — FR-07: Start and stop video recording in MP4 format (or WebM for Safari) when video button is clicked
- `GET /api/fr-08` — FR-08: Automatically download captured photos to browser's default download folder
- `GET /api/fr-09` — FR-09: Automatically download recorded videos to browser's default download folder
- `GET /api/fr-10` — FR-10: Display visual feedback when camera is active
- `GET /api/fr-11` — FR-11: Handle camera permission denial gracefully with user messaging
- `GET /api/fr-12` — FR-12: Provide a camera selector dropdown displaying camera names when multiple cameras are available
- `GET /api/fr-13` — FR-13: Position camera selector above the capture buttons
- `GET /api/fr-14` — FR-14: Support video recordings up to 30 minutes maximum duration
- `GET /api/fr-15` — FR-15: Prevent video recording from exceeding 30-minute limit with appropriate user notification
- `GET /api/fr-16` — FR-16: Display recording duration timer during video capture
- `GET /api/fr-17` — FR-17: Allow users to switch between available cameras using the selector
- `GET /api/fr-18` — FR-18: Generate file names using format: CamerApp-YYYY-MM-DD-HHMMSS.extension (e.g., CamerApp-2026-02-10-183648.jpg)
- `GET /api/fr-19` — FR-19: Display error message and allow user to choose different folder when download folder is inaccessible
- `GET /api/fr-20` — FR-20: Cancel active recording and discard buffered data when user closes browser tab during recording
- `GET /api/fr-21` — FR-21: Continue recording when user switches to another browser tab (recording persists until 30-minute limit)
- `GET /api/fr-22` — FR-22: Request maximum available camera resolution (720p, 1080p, or 4K based on camera capabilities)
- `GET /api/fr-23` — FR-23: Display human-understandable error messages for all error conditions
- `GET /api/fr-24` — FR-24: Disable photo capture button when video recording is in progress
- `GET /api/fr-25` — FR-25: Debounce photo capture to prevent serial captures faster than 1 per second
- `GET /api/fr-26` — FR-26: Display error message when camera resolution is below 720p minimum requirement
- `GET /api/fr-27` — FR-27: Allow 4K video recording to continue for full 30 minutes even if system resources are constrained

## Generated by

Agentic Dev Workflow — initiative `init-camapp-20260211-0120`
