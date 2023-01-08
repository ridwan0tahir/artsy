import { useState, useEffect, useRef, ChangeEvent, useCallback } from "react";

interface IRangeSlider {
  min: number;
  max: number;
  step: number;
  thumbsCap: number;
  onChange: ({ min, max }: { min: number; max: number }) => void;
  className?: string;
}

const RangeSlider = ({
  min,
  max,
  step,
  thumbsCap,
  onChange,
  className,
}: IRangeSlider) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const minValueRef = useRef<number>(min);
  const maxValueRef = useRef<number>(max);
  const range = useRef<HTMLDivElement>(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value: number) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minValue);
    const maxPercent = getPercent(maxValueRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minValue, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValueRef.current);
    const maxPercent = getPercent(maxValue);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxValue, getPercent]);

  const handleMin = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.min(Number(e.target.value), maxValue - thumbsCap);
    setMinValue(value);
    minValueRef.current = value;
  };

  const handleMax = (e: ChangeEvent<HTMLInputElement>) => {
    const value = Math.max(Number(e.target.value), minValue + thumbsCap);
    setMaxValue(value);
    maxValueRef.current = value;
  };

  // Get min and max values when their state changes
  useEffect(() => {
    onChange({ min: minValue, max: maxValue });
  }, [minValue, maxValue]);

  return (
    <div className={className}>
      <div className="slider relative h-1 rounded-md bg-black-10">
        <div
          className="progress absolute h-1 bg-black-03 rounded "
          ref={range}
        ></div>
      </div>

      <div className="range-input relative  ">
        <input
          onChange={handleMin}
          type="range"
          min={min}
          step={step}
          max={max}
          value={minValue}
          className="range-min absolute w-full -top-1 h-1 bg-transparent 
            appearance-none pointer-events-none"
        />

        <input
          onChange={handleMax}
          type="range"
          min={min}
          step={step}
          max={max}
          value={maxValue}
          className="range-max absolute w-full -top-1 h-1 bg-transparent 
            appearance-none pointer-events-none"
        />
      </div>
    </div>
  );
};

export default RangeSlider;
