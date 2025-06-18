import { oAddress, oVirtualNode } from '@olane/o-core';
import { oToolConfig } from './interfaces/tool.interface';

export abstract class oTool extends oVirtualNode {
  public readonly description: string;
  public readonly dependencies: string[];
  public readonly parameters: any;

  constructor(config: oToolConfig) {
    super(config);
    this.description = config.description || '';
    this.dependencies = config.dependencies || [];
    this.parameters = config.parameters || {};
  }

  async initialize(): Promise<void> {
    await super.initialize();
    this.handleProtocol(this.address);
  }

  handleProtocol(address: oAddress) {
    this.logger.debug('Handling protocol: ' + address.protocol);
    this.p2pNode.handle(address.protocol, this.execute.bind(this));
  }

  abstract execute(data: any): Promise<void>;
}
