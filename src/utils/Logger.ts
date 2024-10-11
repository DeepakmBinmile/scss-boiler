/*eslint-disable */
//@ts-ignore
export default function debugLog(...args) {
  if (import.meta.env.VITE_DEBUG_LOG) {
    console.log(...args);
  }
}
