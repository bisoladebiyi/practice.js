export interface UserDataType {
    firstName?: string;
    lastName?: string;
    email: string;
    password: string;
    confirm?: string;
}
export interface DataType {
    name: string | null | undefined;
}
export interface TopicTypes {
    topic: string;
    position: string;
    id?: string;
}
export interface QuestionTypes {
    correctOption: string;
    optionPicked: string;
    options: string[];
    question: string;
}
