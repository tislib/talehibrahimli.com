import * as resources from "../resources";
import { DynamicComponent } from "../base/dynamic-component";

export function getResource(name: string) {
  // @ts-ignore
  return resources[name];
}

function normalizeResource(item: any) {
  if (item.prototype && new item().render) {
    return new item().render().props;
  } else {
    return item().props;
  }
}

export function getResources<T extends DynamicComponent>(items: any): T[] {
    const keys = Object.getOwnPropertyNames(items).filter(item => !item.startsWith('_'));

    return keys.map(item => items[item]).map(item => normalizeResource(item));
}
