export function reverseBooleanAttribute(
  element: HTMLElement,
  attributeName: string,
) {
  const attribute = element.getAttribute(attributeName);
  if (attribute === "true") element.setAttribute(attributeName, "false");
  else element.setAttribute(attributeName, "true");
}
