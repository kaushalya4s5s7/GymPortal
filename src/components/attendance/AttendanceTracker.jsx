import React, { useState, useRef, useEffect } from "react";
import * as faceapi from "face-api.js";

const AttendanceTracker = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isCameraActive, setIsCameraActive] = useState(false);
  const videoRef = useRef();
  const canvasRef = useRef();

  useEffect(() => {
    loadModels();
  }, []);

  const loadModels = async () => {
    try {
      await Promise.all([
        faceapi.nets.tinyFaceDetector.loadFromUri("/models"),
        faceapi.nets.faceLandmark68Net.loadFromUri("/models"),
        faceapi.nets.faceRecognitionNet.loadFromUri("/models"),
      ]);
      setIsLoading(false);
    } catch (error) {
      console.error("Error loading face detection models:", error);
    }
  };

  const startCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraActive(true);
    } catch (error) {
      console.error("Error accessing camera:", error);
    }
  };

  const stopCamera = () => {
    const stream = videoRef.current.srcObject;
    if (stream) {
      stream.getTracks().forEach((track) => track.stop());
      videoRef.current.srcObject = null;
      setIsCameraActive(false);
    }
  };

  return (
    <div className="p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-4">Attendance Tracking</h2>
        <div className="flex space-x-4 mb-4">
          <button
            onClick={isCameraActive ? stopCamera : startCamera}
            className={`px-4 py-2 rounded-md ${
              isCameraActive
                ? "bg-red-600 hover:bg-red-700"
                : "bg-green-600 hover:bg-green-700"
            } text-white transition-colors`}
          >
            {isCameraActive ? "Stop Camera" : "Start Camera"}
          </button>
        </div>
      </div>

      <div className="relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100 rounded-lg">
            <p className="text-lg">Loading face detection models...</p>
          </div>
        )}
        <div className="relative aspect-video max-w-3xl mx-auto">
          <video
            ref={videoRef}
            autoPlay
            muted
            className="w-full h-full rounded-lg shadow-lg"
          />
          <canvas
            ref={canvasRef}
            className="absolute top-0 left-0 w-full h-full"
          />
        </div>
      </div>

      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-4">Today's Attendance Log</h3>
        <div className="bg-white rounded-lg shadow p-4">
          <div className="space-y-2">
            <p className="text-gray-600">
              No attendance records yet for today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AttendanceTracker;
