import "dotenv/config";
import express from "express";

const app = express();
const PORT = parseInt(process.env.PORT ?? "3000", 10);

app.use(express.json());

// Health check
app.get("/health", (_req, res) => res.json({ ok: true, initiative: "init-camapp-20260211-0120" }));

// Initiative info
app.get("/", (_req, res) => res.json({
  initiative: "init-camapp-20260211-0120",
  title: "init-camapp-20260211-0120",
  problem: "Users need a browser-based web application to access their PC camera, view live feed, and capture photos and videos through a simple, intuitive interface.",
  goals: ["Enable users to activate their PC camera from within a web browser","Provide real-time camera feed display","Allow users to capture still photos from the camera feed in JPEG format","Allow users to record video from the camera feed in MP4 format (or WebM for Safari)","Support video recordings up to 30 minutes in length","Provide intuitive and easy-to-use interface for camera selection and capture","Support maximum available camera resolution including 720p, 1080p, and 4K"],
}));

// --- Functional requirement stubs ---
  // FR-01: Application must run in modern web browsers without requiring plugins or extensions
  app.get("/api/fr-01", (_req, res) => res.json({ id: "FR-01", status: "not-implemented" }));

  // FR-02: Provide a button to request and enable PC camera access
  app.get("/api/fr-02", (_req, res) => res.json({ id: "FR-02", status: "not-implemented" }));

  // FR-03: Display live camera feed in real-time once camera is enabled
  app.get("/api/fr-03", (_req, res) => res.json({ id: "FR-03", status: "not-implemented" }));

  // FR-04: Provide a photo capture button positioned to the right side of the camera feed
  app.get("/api/fr-04", (_req, res) => res.json({ id: "FR-04", status: "not-implemented" }));

  // FR-05: Provide a video capture button positioned below the camera feed
  app.get("/api/fr-05", (_req, res) => res.json({ id: "FR-05", status: "not-implemented" }));

  // FR-06: Capture and save still images in JPEG format when photo button is clicked
  app.get("/api/fr-06", (_req, res) => res.json({ id: "FR-06", status: "not-implemented" }));

  // FR-07: Start and stop video recording in MP4 format (or WebM for Safari) when video button is clicked
  app.get("/api/fr-07", (_req, res) => res.json({ id: "FR-07", status: "not-implemented" }));

  // FR-08: Automatically download captured photos to browser's default download folder
  app.get("/api/fr-08", (_req, res) => res.json({ id: "FR-08", status: "not-implemented" }));

  // FR-09: Automatically download recorded videos to browser's default download folder
  app.get("/api/fr-09", (_req, res) => res.json({ id: "FR-09", status: "not-implemented" }));

  // FR-10: Display visual feedback when camera is active
  app.get("/api/fr-10", (_req, res) => res.json({ id: "FR-10", status: "not-implemented" }));

  // FR-11: Handle camera permission denial gracefully with user messaging
  app.get("/api/fr-11", (_req, res) => res.json({ id: "FR-11", status: "not-implemented" }));

  // FR-12: Provide a camera selector dropdown displaying camera names when multiple cameras are available
  app.get("/api/fr-12", (_req, res) => res.json({ id: "FR-12", status: "not-implemented" }));

  // FR-13: Position camera selector above the capture buttons
  app.get("/api/fr-13", (_req, res) => res.json({ id: "FR-13", status: "not-implemented" }));

  // FR-14: Support video recordings up to 30 minutes maximum duration
  app.get("/api/fr-14", (_req, res) => res.json({ id: "FR-14", status: "not-implemented" }));

  // FR-15: Prevent video recording from exceeding 30-minute limit with appropriate user notification
  app.get("/api/fr-15", (_req, res) => res.json({ id: "FR-15", status: "not-implemented" }));

  // FR-16: Display recording duration timer during video capture
  app.get("/api/fr-16", (_req, res) => res.json({ id: "FR-16", status: "not-implemented" }));

  // FR-17: Allow users to switch between available cameras using the selector
  app.get("/api/fr-17", (_req, res) => res.json({ id: "FR-17", status: "not-implemented" }));

  // FR-18: Generate file names using format: CamerApp-YYYY-MM-DD-HHMMSS.extension (e.g., CamerApp-2026-02-10-183648.jpg)
  app.get("/api/fr-18", (_req, res) => res.json({ id: "FR-18", status: "not-implemented" }));

  // FR-19: Display error message and allow user to choose different folder when download folder is inaccessible
  app.get("/api/fr-19", (_req, res) => res.json({ id: "FR-19", status: "not-implemented" }));

  // FR-20: Cancel active recording and discard buffered data when user closes browser tab during recording
  app.get("/api/fr-20", (_req, res) => res.json({ id: "FR-20", status: "not-implemented" }));

  // FR-21: Continue recording when user switches to another browser tab (recording persists until 30-minute limit)
  app.get("/api/fr-21", (_req, res) => res.json({ id: "FR-21", status: "not-implemented" }));

  // FR-22: Request maximum available camera resolution (720p, 1080p, or 4K based on camera capabilities)
  app.get("/api/fr-22", (_req, res) => res.json({ id: "FR-22", status: "not-implemented" }));

  // FR-23: Display human-understandable error messages for all error conditions
  app.get("/api/fr-23", (_req, res) => res.json({ id: "FR-23", status: "not-implemented" }));

  // FR-24: Disable photo capture button when video recording is in progress
  app.get("/api/fr-24", (_req, res) => res.json({ id: "FR-24", status: "not-implemented" }));

  // FR-25: Debounce photo capture to prevent serial captures faster than 1 per second
  app.get("/api/fr-25", (_req, res) => res.json({ id: "FR-25", status: "not-implemented" }));

  // FR-26: Display error message when camera resolution is below 720p minimum requirement
  app.get("/api/fr-26", (_req, res) => res.json({ id: "FR-26", status: "not-implemented" }));

  // FR-27: Allow 4K video recording to continue for full 30 minutes even if system resources are constrained
  app.get("/api/fr-27", (_req, res) => res.json({ id: "FR-27", status: "not-implemented" }));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Health: http://localhost:${PORT}/health`);
});
