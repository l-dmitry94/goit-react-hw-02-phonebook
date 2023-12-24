import { nanoid } from 'nanoid';

const Filter = ({ value, onChange }) => {
    const filterId = nanoid();

    return (
        <label htmlFor={filterId}>
            Find contacts by name
            <input
                className="phonebook__form-input"
                id={filterId}
                type="text"
                name="filter"
                value={value}
                onChange={onChange}
            />
        </label>
    );
};

export default Filter;
