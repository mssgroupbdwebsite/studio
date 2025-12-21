
// This file is a central hub for re-exporting Firebase-related modules.
// It ensures that components can import from a single, consistent location.

// Firebase SDK initializers and config
export * from './config';
export * from './client-init'; // Exports initialized app, auth, firestore

// React context providers and hooks
export * from './provider';
export * from './client-provider';

// Firestore-specific hooks
export * from './firestore/use-collection';
export * from './firestore/use-doc';

// Non-blocking fire-and-forget database operations
export * from './non-blocking-updates';

// Custom error classes for better debugging
export * from './errors';
export * from './error-emitter';
