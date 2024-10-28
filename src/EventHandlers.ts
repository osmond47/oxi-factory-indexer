/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  Factory,
  Factory_PairCreated,
} from "generated";

Factory.PairCreated.handler(async ({ event, context }) => {
  const entity: Factory_PairCreated = {
    id: `${event.chainId}_${event.block.height}_${event.logIndex}`,
    token0: `${event.params.token0.bits}`,
    token1: `${event.params.token1.bits}`,
    pair: `${event.params.pair.bits}`,
  };

  context.Factory_PairCreated.set(entity);
});
