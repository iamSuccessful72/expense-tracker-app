import { useContext } from "react";
import UserContext, { UserContextType } from "./User";

function RegistrationForm() {
  const { formData, setFormData } = useContext(UserContext) as UserContextType;
  const { setIsLogged } = useContext(UserContext) as UserContextType;

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="font-bold font-Lato my-4">Fill up form to proceed</h2>
      <div className="bg-zircon border p-4 rounded-md">
        <label htmlFor="first-name">
          First Name
          <span className="text-red-400">*</span>
        </label>
        <input
          aria-placeholder="Should be at least 3 characters long"
          className="block border border-rock-blue my-2 p-2 rounded-md w-full"
          id="first-name"
          name="first_name"
          onChange={handleChange}
          pattern="([a-zA-Z]|[a-zA-Z]+\W){3,}"
          placeholder="Should be at least 3 characters long"
          required
          type="text"
          value={formData.first_name || ""}
        />
        <label htmlFor="last-name">
          Last Name
          <span className="text-red-400">*</span>
        </label>
        <input
          aria-placeholder="Should be at least 3 characters long"
          className="block border border-rock-blue my-2 p-2 rounded-md w-full"
          id="last-name"
          name="last_name"
          onChange={handleChange}
          pattern="([a-zA-Z]|[a-zA-Z]+\W){3,}"
          placeholder="Should be at least 3 characters long"
          required
          type="text"
          value={formData.last_name || ""}
        />
        <label htmlFor="initial-deposit">
          Intial Deposit
          <span className="text-red-400">*</span>
        </label>
        <input
          aria-placeholder="should be nothing less than 100"
          className="block border border-rock-blue my-2 p-2 rounded-md w-full"
          id="initial-deposit"
          min={100}
          name="initial_deposit"
          onChange={handleChange}
          placeholder="should be nothing less than 100"
          required
          type="number"
          value={formData.initial_deposit || ""}
        />
        <fieldset className="bg-white border border-rock-blue my-2 p-2 rounded-md">
          <legend>
            Gender <span className="text-red-400">*</span>
          </legend>
          <div>
            <label className="mr-2" htmlFor="female">
              Female
            </label>
            <input
              checked={formData.gender === "female"}
              className="align-middle"
              id="female"
              name="gender"
              onChange={handleChange}
              type="radio"
              value="female"
            />
          </div>
          <div>
            <label className="mr-2" htmlFor="male">
              Male
            </label>
            <input
              checked={formData.gender === "male"}
              className="align-middle"
              id="male"
              name="gender"
              onChange={handleChange}
              type="radio"
              value="male"
            />
          </div>
        </fieldset>
        <label className="block my-2" htmlFor="currency">
          Currency
          <span aria-label="required" className="text-red-400">
            *
          </span>
        </label>
        <select
          className="bg-white block border border-rock-blue mb-2  p-2 rounded-md w-full"
          id="currency"
          name="currency"
          onChange={handleChange}
          value={formData.currency || ""}
        >
          <option value={""}>--Select choice of currency--</option>
          <option value={"EUR"}>EUR</option>
          <option value={"GBP"}>GBP</option>
          <option value={"NGN"}>NGN</option>
          <option value={"USD"}>USD</option>
          <option value={"YEN"}>YEN</option>
        </select>
        <div className="md:flex justify-end mt-4">
          <button
            className="bg-azure-radiance md:w-24 p-2 rounded-md text-zircon w-full"
            type="submit"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement & HTMLSelectElement>
  ): void {
    const name: string = event.target.name;
    const value: string = event.target.value;
    setFormData((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    if (
      formData.currency &&
      formData.first_name &&
      formData.gender &&
      formData.initial_deposit &&
      formData.last_name
    ) {
      setIsLogged(true);
    }
  }
}

export default RegistrationForm;
