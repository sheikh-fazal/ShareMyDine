import { FormHelperText, Hidden } from "@mui/material";
import FileUploadIcon from "@mui/icons-material/FileUpload";
import { useFormContext, Controller } from "react-hook-form";
import { enqueueSnackbar } from "notistack";
import CircularProgress from "@mui/material/CircularProgress";
import { useState } from "react";

export const RHFApiUploadFile = (props: any) => {
  const { disabled, name, apiCall, ...other } = props;
  const { control } = useFormContext();
  let [loading, setLoading] = useState(false);
  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => {
        const checkError = !!error && !field.value;
        return (
          <>
            <label
              htmlFor={name}
              style={{
                height: "40px",
                borderRadius: "4px",
                // border: `1px solid #A3A6BB`,
                border: `1px solid ${
                  other?.formState?.errors?.[`${name}`] ? "red" : "#E5E8EB"
                }`,
                width: "100% !important",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                cursor: `${disabled ? "" : "pointer"}`,
              }}
            >
              <div style={{ paddingLeft: "10px", color: "#A3A6BB" }}>
                {(field?.value?.name == undefined
                  ? field.value
                  : field.value.name) ||
                  (other.label ? other?.label : "Upload Image")}
              </div>
              {loading ? (
                <CircularProgress
                  sx={{
                    color: "#A3A6BB",
                    marginRight: "10px",
                  }}
                />
              ) : (
                <FileUploadIcon
                  sx={{
                    color: "#A3A6BB",
                    marginRight: "10px",
                  }}
                />
              )}
            </label>
            <input
              type="file"
              disabled={disabled}
              name={name}
              id={name}
              onChange={async (e: any) => {
                const file: any = e.target.files?.[0];
                let formData: any = new FormData();
                formData.append("evidence", file);
                setLoading(true);
                apiCall({ formData })
                  .unwrap()
                  .then((res: any) => {
                    setLoading(false);
                    field.onChange({
                      target: { value: res?.data, name: field.name },
                    });
                  })
                  .catch((error: any) => {
                    setLoading(false);
                    const errMsg = error?.data?.message;
                    enqueueSnackbar(errMsg ?? "Error occured", {
                      variant: "error",
                    });
                  });
              }}
              style={{ display: "none" }}
            />
            {checkError && (
              <FormHelperText error sx={{ px: 2 }}>
                {error.message}
              </FormHelperText>
            )}
          </>
        );
      }}
    />
  );
};