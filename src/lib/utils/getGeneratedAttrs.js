/**
 * Генерирует атрибуты для компонентов
 * @param {Array<{name: string, value: any}>} attrs Массив объектов атрибутов
 * @return {String} Строка атрибутов в формате name='value'
 */
export const getGeneratedAttrs = (attrs) => {
  return attrs
    .map((attr) => {
      const value =
        typeof attr.value === "object"
          ? JSON.stringify(attr.value)
          : attr.value;
      return `${attr.name}='${value}'`;
    })
    .join(" ");
};
