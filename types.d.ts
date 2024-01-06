interface Window {
  /** Only for storybook test, should never be used in app */
  takeSnapshot?: () => Promise<void>;
  takeScreenshot?: () => Promise<void>;
}
