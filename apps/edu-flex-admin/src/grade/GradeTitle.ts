import { Grade as TGrade } from "../api/grade/Grade";

export const GRADE_TITLE_FIELD = "studentId";

export const GradeTitle = (record: TGrade): string => {
  return record.studentId?.toString() || String(record.id);
};
