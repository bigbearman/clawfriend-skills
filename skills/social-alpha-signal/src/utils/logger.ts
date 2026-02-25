export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Lightweight logger with configurable level filtering.
 */
export class Logger {
  private readonly prefix: string;
  private level: LogLevel;

  private static readonly LEVEL_ORDER: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  constructor(prefix: string, level: LogLevel = "info") {
    this.prefix = prefix;
    this.level = level;
  }

  /**
   * Update the minimum log level at runtime.
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  /**
   * Log an informational message.
   */
  info(message: string, ...args: unknown[]): void {
    this.log("info", message, ...args);
  }

  /**
   * Log a warning message.
   */
  warn(message: string, ...args: unknown[]): void {
    this.log("warn", message, ...args);
  }

  /**
   * Log an error message.
   */
  error(message: string, ...args: unknown[]): void {
    this.log("error", message, ...args);
  }

  /**
   * Log a debug message.
   */
  debug(message: string, ...args: unknown[]): void {
    this.log("debug", message, ...args);
  }

  private log(level: LogLevel, message: string, ...args: unknown[]): void {
    if (Logger.LEVEL_ORDER[level] < Logger.LEVEL_ORDER[this.level]) {
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
