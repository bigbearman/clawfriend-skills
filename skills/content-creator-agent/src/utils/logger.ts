/** Supported log severity levels. */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Lightweight logger for the content-creator-agent skill.
 *
 * Provides leveled logging with a configurable minimum severity.
 */
export class Logger {
  private readonly prefix: string;
  private level: LogLevel;

  private static readonly LEVELS: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  /**
   * Create a new Logger instance.
   *
   * @param prefix - A label prepended to every log line (e.g. module name).
   * @param level - Minimum severity to emit. Defaults to `"info"`.
   */
  constructor(prefix: string, level: LogLevel = "info") {
    this.prefix = prefix;
    this.level = level;
  }

  /**
   * Set the minimum log level at runtime.
   *
   * @param level - The new minimum severity.
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /** Log a debug-level message. */
  debug(message: string, ...args: unknown[]): void {
    this.log("debug", message, ...args);
  }

  /** Log an informational message. */
  info(message: string, ...args: unknown[]): void {
    this.log("info", message, ...args);
  }

  /** Log a warning. */
  warn(message: string, ...args: unknown[]): void {
    this.log("warn", message, ...args);
  }

  /** Log an error. */
  error(message: string, ...args: unknown[]): void {
    this.log("error", message, ...args);
  }

  // -----------------------------------------------------------------------
  // Internal
  // -----------------------------------------------------------------------

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (Logger.LEVELS[level] < Logger.LEVELS[this.level]) {
      return;
    }

    const timestamp = new Date().toISOString();
    const tag = `[${timestamp}] [${level.toUpperCase()}] [${this.prefix}]`;

    switch (level) {
      case "debug":
        console.debug(tag, message, ...args);
        break;
      case "info":
        console.info(tag, message, ...args);
        break;
      case "warn":
        console.warn(tag, message, ...args);
        break;
      case "error":
        console.error(tag, message, ...args);
        break;
    }
  }
}
