import { useDispatch } from "react-redux";
import s from "./SearchBox.module.css";
import { changeFilter } from "../../redux/filters/slice";

const SearchBox = () => {
  // ми повідомляємо Redux, що треба виконати певну дію, і ця дія змінить стан у store.
  const dispatch = useDispatch();
  return (
    <div className={s.searchBox}>
      <label htmlFor="search">Find contacts by name</label>
      <input
        className={s.inputSearchBox}
        type="text"
        id="search"
        onChange={(e) => dispatch(changeFilter(e.target.value))}
      />
    </div>
  );
};

export default SearchBox;
