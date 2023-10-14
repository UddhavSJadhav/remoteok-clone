import { useEffect, useRef, useState } from "react";
import DropDownList from "./DropDownList";

const SearchInput = () => {
  const jobSearchRef = useRef<HTMLInputElement>(null);
  const [isFocused, setIsFocused] = useState<boolean>(false);

  useEffect(() => {
    let timeOut: ReturnType<typeof setTimeout> | null = null;
    let blinkInterval: ReturnType<typeof setInterval> | null = null;

    const jobsArr = ["engineer", "advocate", "react", "assistant"];
    let currentJobIndex = 0;
    let currentDirection = 1;

    function nextLetter() {
      if (jobSearchRef.current) {
        const inputValue = jobSearchRef.current.value.trim();
        const currentJob = jobsArr[currentJobIndex];

        if (currentDirection === 1) {
          if (inputValue.length < currentJob.length) {
            jobSearchRef.current.value = currentJob.slice(
              0,
              inputValue.length + 1
            );
          } else {
            currentDirection = -1;
            blinkCursorEnd();
            return;
          }
        } else {
          if (inputValue.length === 1) {
            jobSearchRef.current.value = " ";
            blinkCursorStart();
            return;
          } else if (inputValue.length > 0) {
            jobSearchRef.current.value = currentJob.slice(
              0,
              inputValue.length - 1
            );
          } else {
            currentDirection = 1;
            currentJobIndex = (currentJobIndex + 1) % jobsArr.length;
          }
        }
      }

      timeOut = setTimeout(nextLetter, 100);
    }

    // function to blink cursor few times at the start of new word to be auto-typed.
    function blinkCursorStart() {
      let isShowing = false;
      blinkInterval = setInterval(() => {
        if (jobSearchRef.current) {
          jobSearchRef.current.value = isShowing ? " " : "|";
          isShowing = !isShowing;
        }
      }, 300);

      timeOut = setTimeout(() => {
        if (blinkInterval) clearInterval(blinkInterval);
        nextLetter();
      }, 600);
    }

    // function to blink cursor few times at the end of auto-typed word.
    function blinkCursorEnd() {
      let isShowing = false;
      blinkInterval = setInterval(() => {
        if (jobSearchRef.current) {
          jobSearchRef.current.value = isShowing
            ? jobSearchRef.current.value.slice(
                0,
                jobSearchRef.current.value.length - 1
              )
            : jobSearchRef.current.value + "|";
          isShowing = !isShowing;
        }
      }, 300);

      timeOut = setTimeout(() => {
        if (blinkInterval) clearInterval(blinkInterval);
        nextLetter();
      }, 1000);
    }

    // if input field is focused, we need empty input field.
    if (isFocused) {
      if (jobSearchRef.current) jobSearchRef.current.value = "";
      if (timeOut) clearTimeout(timeOut);
      if (blinkInterval) clearInterval(blinkInterval);
      return;
    }

    nextLetter();

    // clear-up function when component unmounts.
    return () => {
      if (timeOut) clearTimeout(timeOut);
      if (blinkInterval) clearInterval(blinkInterval);
    };
  }, [isFocused]);

  return (
    <div className="mt-7 relative">
      <input
        type="text"
        className="w-[min(400px,80vw)] bg-color-bg bg-[url('/assets/search-white.png')] bg-no-repeat bg-[0.75em_center] bg-[length:1em] ps-14 py-3 pe-4 text-2xl font-bold text-white outline-none border-b border-solid border-white rounded-full focus:shadow-[0_0_0_5px_rgba(255,75,66,0.5)]"
        placeholder="your next job?"
        ref={jobSearchRef}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      {isFocused && (
        <div className="absolute w-full z-10 -mt-1">
          <div className="w-[min(400px,80vw)] mx-auto">
            <DropDownList />
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchInput;
