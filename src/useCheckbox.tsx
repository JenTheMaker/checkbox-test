import { useState, useEffect } from "react";
import { CheckBoxItem } from "./CheckboxItem";

const useCheckbox = (initialValue?: CheckBoxItem[]) => {
    const [checkboxList, setCheckboxList] = useState<CheckBoxItem[]|undefined>(initialValue);

    useEffect(() => {
        if (checkboxList === undefined) {
            const mockItem = [
                {
                    id: "1",
                    done: false
                },
                {
                    id: "2",
                    done: false
                }
            ];
            setCheckboxList(mockItem);
        }
    }, [checkboxList]);

    return {
        checkboxList,
        onClick: (checkItem: CheckBoxItem) => {
            if (checkboxList !== undefined) {
                console.log("test");
                console.log(checkItem);
                console.log(checkboxList);
                console.log("here");
                const itemIndex = checkboxList.findIndex((item => item.id === checkItem.id));
                checkboxList[itemIndex].done = !checkItem.done;
                checkboxList[itemIndex].id = checkItem.id + "AHH";
                const updatedCheckboxList = checkboxList;
                setCheckboxList(updatedCheckboxList);
            }
        }
    };
};

export default useCheckbox;