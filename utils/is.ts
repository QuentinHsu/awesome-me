/**
 * IsEmptyObject函数用于检查一个对象是否为空
 *
 * @param {Object} obj - 需要检查的对象
 * @returns {boolean} - 如果对象为空（即没有任何可枚举属性），则返回true，否则返回false
 */
export function isEmptyObject(obj: Record<PropertyKey, unknown>): boolean {
	// Object.keys返回一个包含对象自身的所有可枚举属性的数组
	// 如果这个数组的长度为0，那么这个对象就是空的
	return Object.keys(obj).length === 0;
}
