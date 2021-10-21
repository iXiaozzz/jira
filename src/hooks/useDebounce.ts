import {useCallback, useEffect, useRef, useState} from "react"

// 会有问题但是没有找到问题的解决办法
// interface iCurrent {
//   func: (params?: any) => void;
//   timer: number | null;
// }
// function useDebounce(func: (params?: any) => void, delay: number, dep = []) {
//   let ref: iCurrent = { func, timer: null }
//   const { current } = useRef(ref)
//   console.log(current);
//   useEffect(() => {
//     current.func = func
//   }, [func])
//
//   return useCallback(function fn(...args: any[]) {
//     if (current.timer) {
//       window.clearTimeout(current.timer)
//     }
//     current.timer = window.setTimeout(() => {
//       current.func(...args)
//     }, delay)
//   }, dep)
//
// }
// export default useDebounce


export function useDebounce<T>(value: T, delay?: number): any {
  const [debouncedValue, setDebouncedValue] = useState(value)
  useEffect(() => {
    const timeout = setTimeout(() => setDebouncedValue(value), delay)
    return () => clearTimeout(timeout)
  }, [value, delay])
  return debouncedValue
}