/**
 * Log severity levels, ordered from least to most severe.
 */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Simple structured logger for the DeFi Yield Scanner skill.
 *
 * Provides leveled logging with timestamps and optional context.
 * Messages below the configured level are suppressed.
 */
export class Logger {
  private level: LogLevel;

  private static readonly LEVEL_ORDER: Record<LogLevel, number> = {
    debug: 0,
    info: 1,
    warn: 2,
    error: 3,
  };

  /**
   * Create a new Logger instance.
   *
   * @param level - The minimum log level to output. Defaults to "info".
   */
  constructor(level: LogLevel = "info") {
    this.level = level;
  }

  /**
   * Log a debug-level message.
   *
   * @param message - The message to log.
   * @param context - Optional structured context data.
   */
  debug(message: string, context?: Record<string, unknown>): void {
    this.log("debug", message, context);
  }

  /**
   * Log an info-level message.
   *
   * @param message - The message to log.
   * @param context - Optional structured context data.
   */
  info(message: string, context?: Record<string, unknown>): void {
    this.log("info", message, context);
  }

  /**
   * Log a warning-level message.
   *
   * @param message - The message to log.
   * @param context - Optional structured context data.
   */
  warn(message: string, context?: Record<string, unknown>): void {
    this.log("warn", message, context);
  }

  /**
   * Log an error-level message.
   *
   * @param message - The message to log.
   * @param context - Optional structured context data.
   */
  error(message: string, context?: Record<string, unknown>): void {
    this.log("error", message, context);
  }

  /**
   * Set the minimum log level.
   *
   * @param level - The new minimum log level.
   */
  setLevel(level: LogLevel): void {
    this.level = level;
  }

  private log(
    level: LogLevel,
    message: string,
    context?: Record<string, unknown>,
  ): void {
    if (Logger.LEVEL_ORDER[level] < Logger.LEVEL_ORDER[this.level]) {
      return;
    }

    const timestamp = new Date().toISOString();
    const prefix = `[${timestamp}] [${level.toUpperCase()}]`;

    if (context) {
      console.log(`${prefix} ${message}`, context);
    } else {
      console.log(`${prefix} ${message}`);
    }
  }
}
