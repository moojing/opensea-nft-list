import { useEffect } from "react";
import { fromEvent, tap, map, filter, debounceTime, distinct } from "rxjs";

export default function useScrollBottom(callback) {
  useEffect(() => {
    const scrollBottom$ = fromEvent(window, "scroll")
      .pipe(
        map(() => window.scrollY),

        filter(
          (current) =>
            current + window.innerHeight >=
            document.documentElement.scrollHeight
        ),
        debounceTime(200),
        distinct(),
        tap(callback)
      )
      .subscribe();

    return () => scrollBottom$.unsubscribe();
  }, [callback]);
}
