import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const ScheduleCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="teacherId" source="teacherId" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Create>
  );
};
