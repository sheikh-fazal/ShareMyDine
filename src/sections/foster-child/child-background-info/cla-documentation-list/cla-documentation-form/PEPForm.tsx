import React from 'react'
import { useForm } from 'react-hook-form';
import { Grid, Paper } from '@mui/material';
import { PEPContentData, PEPFormData, PEPFormValidation } from '..';
import { yupResolver } from '@hookform/resolvers/yup';
import { FormProvider } from '@root/components/hook-form';

export default function PEPForm() {

  const methods: any = useForm({
    resolver: yupResolver(PEPFormValidation),
  });

  const { handleSubmit } = methods;

  const onSubmit = async (data: any) => {

  };

  return (
    <Paper elevation={4} sx={{ padding: 3 }}>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <Grid container columnSpacing={4}>
          {PEPFormData?.map((item: any) => (
            <Grid item xs={12} md={item?.md} key={item?.id}>
              <item.component
                {...item.componentProps}
                size={"small"}>
                {item?.componentProps?.select
                  ? item?.options?.map((option: any) => (
                    <option key={option?.value} value={option?.value}>
                      {option?.label}
                    </option>
                  ))
                  : null}
                {item?.heading}
              </item.component>
            </Grid>
          ))}
        </Grid>
        
        <Grid container columnSpacing={4}>
          {PEPContentData.map((item) => {
            const Component: any = item.component;
            if (item.para) {
              const [firstWord, ...restWords] = item.para.split(" ");
              return (
                <Grid item xs={12} md={item?.md} key={item?.id}>
                  <Component>
                    <span style={{ fontWeight: "bold" }}>{firstWord}</span>
                    {restWords.join(" ")}
                  </Component>
                </Grid>
              );
            }
            return <Component key={item.id} {...item.componentProps} />;
          })}
        </Grid>
      </FormProvider>
    </Paper>
  )
}