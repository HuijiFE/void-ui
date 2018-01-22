/**
 * 将分转换成指定货币格式 eg: 52346236 --> $5,23,462.36
 * @param value [number] 要格式化的值
 * @param prefix [string] 前缀
 * @return [string]
 */
export function toCurrency(value: number, prefix: string = '$'): string {
  let str: string;
  let num: number;
  num = value / 100;
  str = num.toLocaleString('en-IN', {
    // style: 'currency',
    maximumFractionDigits: 2,
    minimumFractionDigits: 2,
  });

  return `${prefix}${str}`;
}

/**
 * 分钟转小时
 * @param value [number] 分钟
 * @param suffix [string] 后缀
 * @return [string]
 */
export function minute2hour(value: number, suffix: string = 'h'): string {
  return `${(value / 60).toFixed(1)}${suffix}`;
}
