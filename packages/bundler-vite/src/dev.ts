import { getConfig } from './config/config';
import { createServer } from './server/server';
import { Env, IBabelPlugin, IConfig } from './types';

interface IOpts {
  afterMiddlewares?: any[];
  beforeMiddlewares?: any[];
  onDevCompileDone?: any;
  port?: number;
  host?: string;
  cwd: string;
  config: IConfig;
  entry: Record<string, string>;
  extraBabelPlugins?: IBabelPlugin[];
  extraBabelPresets?: IBabelPlugin[];
}

export async function dev(opts: IOpts) {
  const viteConfig = await getConfig({
    cwd: opts.cwd,
    env: Env.development,
    entry: opts.entry,
    userConfig: opts.config,
    extraBabelPlugins: opts.extraBabelPlugins,
    extraBabelPresets: opts.extraBabelPresets,
  });

  await createServer({
    viteConfig,
    userConfig: opts.config,
    cwd: opts.cwd,
    beforeMiddlewares: opts.beforeMiddlewares,
    afterMiddlewares: opts.afterMiddlewares,
    onDevCompileDone: opts.onDevCompileDone,
  });
}
