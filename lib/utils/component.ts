import { RecordPropsDefinition, DefaultProps } from 'vue/types/options';
import { MEDIA_ALIASES } from '@void/ui/lib/components/base';

/**
 * Suffix responsive media aliases props to source def, and copy source to the target def,
 * return the target.
 * @param target The target props def to inject to.
 * @param source will be appended responsive aliases and inject to target
 */
export function responsivePropsDef(
  target: RecordPropsDefinition<DefaultProps>,
  source: RecordPropsDefinition<DefaultProps>,
): RecordPropsDefinition<DefaultProps> {
  const propsResponsive: RecordPropsDefinition<DefaultProps> = {};

  Object.entries(source).forEach(([name, def]) => {
    propsResponsive[name] = def;
    MEDIA_ALIASES.forEach(alias => {
      propsResponsive[name + alias.charAt(0).toUpperCase() + alias.substring(1)] = def;
    });
  });

  // tslint:disable-next-line:prefer-object-spread
  return Object.assign(target, source);
}
