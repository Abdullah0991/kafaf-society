import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    required,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext
} from 'react-admin';
import { generateImagePreview } from "./index";

export const NewsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="title" label='العنوان' />
            <TextField source="description" label='الوصف' />
            <DateField source="date" label='التاريخ' />
            <DateField source="createdAt" label='تاريخ الإنشاء' />
        </Datagrid>
    </List>
);

const NewsTitle = () => {
    const record = useRecordContext();
    return <span>الخبر {record ? `"${record.title}"` : ''}</span>;
};

export const NewsEdit = () => (
    <Edit title={<NewsTitle />}>
        <SimpleForm>
            <TextInput
                name="title"
                source="title"
                label="العنوان"
                validate={required()}
                fullWidth
            />
            <TextInput
                name="description"
                source="description"
                label="الوصف"
                rows={2}
                validate={required()}
                multiline
                fullWidth
            />
            <DateInput
                name="date"
                source="date"
                label='التاريخ'
                parse={value => new Date(value).toISOString()}
            />
            <ImageInput name='image' source='image' label='صورة' format={generateImagePreview}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const NewsCreate = () => (
    <Create>
        <SimpleForm defaultValues={{ date: new Date() }}>
            <TextInput
                name="title"
                source="title"
                label="العنوان"
                validate={required()}
                fullWidth
            />
            <TextInput
                name="description"
                source="description"
                label="الوصف"
                rows={2}
                validate={required()}
                multiline
                fullWidth
            />
            <DateInput
                name="date"
                source="date"
                label="تاريخ الخبر"
                parse={value => new Date(value).toISOString()}
            />
            <ImageInput name='image' source='image' label='صورة'>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);