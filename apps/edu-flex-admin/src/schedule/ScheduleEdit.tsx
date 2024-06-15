import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  DateTimeInput,
  TextInput,
} from "react-admin";

import { CourseTitle } from "../course/CourseTitle";

export const ScheduleEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceInput source="course.id" reference="Course" label="course">
          <SelectInput optionText={CourseTitle} />
        </ReferenceInput>
        <DateTimeInput label="date" source="date" />
        <TextInput label="teacherId" source="teacherId" />
        <DateTimeInput label="time" source="time" />
      </SimpleForm>
    </Edit>
  );
};
