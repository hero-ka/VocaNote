import { Notecolor } from "../../../core/constants/noteColors";
type ColorPickerProps = {
    value: string;
    onChange: (color: string) => void;
};

const ColorPicker = ({ value, onChange, }: ColorPickerProps) => {
    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-3">
                {Notecolor.map((color) => {
                    const isSelected = value === color;
                    return (
                        <button key={color} type="button" aria-label={`Select color ${color}`} onClick={() => onChange(color)}
                            className={` h-9 w-9 rounded-full border-2 transition-all duration-200 hover:scale-105 ${isSelected ? "scale-110 border-neutral-900" : "border-white"}`}
                            style={{ backgroundColor: color }}
                        />
                    );
                })}
            </div>

            <div className="flex items-center justify-between">
                <span className="text-sm text-neutral-500">
                    Custom color
                </span>

                <label className=" relative flex h-9 w-9 cursor-pointer overflow-hidden rounded-full border border-neutral-200">
                    <input type="color" value={value} onChange={(event) => onChange(event.target.value)} className=" absolute -inset-2 h-14 w-14 cursor-pointer" />
                </label>
            </div>
        </div>
    );
};

export default ColorPicker;