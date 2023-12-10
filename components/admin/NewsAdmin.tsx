import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    SimpleForm,
    TextField,
    TextInput
} from 'react-admin';

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

export const NewsEdit = () => (
    <Edit>
        <SimpleForm>
            <TextInput name="title" source="title" label="العنوان" />
            <TextInput name="description" source="description" label="الوصف" />
            <DateInput name="date" source="date" label='التاريخ' parse={value => new Date(value).toISOString()} />
            <ImageInput name='image' source='image' label='صورة'>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);

export const NewsCreate = () => (
    <Create>
        <SimpleForm>
            <TextInput name="title" source="title" label="العنوان" />
            <TextInput name="description" source="description" label="الوصف" />
            <DateInput name="date" source="date" label="تاريخ الخبر" parse={value => new Date(value).toISOString()} />
            <ImageInput name='image' source='image' label='صورة'>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);