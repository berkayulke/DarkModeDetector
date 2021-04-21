export interface DarkModeDetectorPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
