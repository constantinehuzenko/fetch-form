import { useForm } from "react-hook-form";
import { API_FORM } from "../../common/constants";
import { useFetch } from "../../common/hooks/useFetch";
import { usePostRequest } from "../../common/hooks/usePostRequest";
import { FormTextInput } from "../../components/FormTextInput/FormTextInput";
import { FormSelect } from "../../components/FormSelect/FormSelect";
import { SubmitBtn } from "../../components/SubmitBtn/SubmitBtn";
import { Notification } from "../../components/Notification/Notification";
import {
  DEFAULT_FORM,
  selectsConfigArray,
  textInputsConfigArray,
} from "./form.page.config";

export const FormPage = () => {
  const { data, loading, error } = useFetch(API_FORM);
  const { control, handleSubmit } = useForm(DEFAULT_FORM);
  const { postLoading, postSuccess, postError, handlePostRequest } =
    usePostRequest();

  const onSubmit = (data) => handlePostRequest(data);
  const selectsArray = selectsConfigArray(data);

  return (
    <>
      <h1>User Form🛸</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        {textInputsConfigArray.map((inputConfig) => (
          <FormTextInput {...inputConfig} control={control} />
        ))}

        {selectsArray.map((inputConfig) => (
          <FormSelect {...inputConfig} control={control} loading={loading}>
            {inputConfig.optionsComponent}
          </FormSelect>
        ))}

        <Notification error={error || postError} success={postSuccess} />

        <SubmitBtn loading={postLoading} />
      </form>
    </>
  );
};
