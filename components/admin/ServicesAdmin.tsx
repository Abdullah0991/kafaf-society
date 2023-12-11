import {
    Create,
    Datagrid,
    Edit,
    FunctionField,
    List,
    required,
    SearchInput,
    SelectInput,
    SimpleForm,
    TextField,
    TextInput,
    UrlField,
    useRecordContext
} from 'react-admin';
import { Services } from "@prisma/client";

const ServiceCategories: { id: number, name: string }[] = [
    { id: 0, name: 'القسم الطبي' },
    { id: 1, name: 'قسم الأنشطة' },
    { id: 2, name: 'قسم المخيمات' },
    { id: 3, name: 'قسم الألبسة' },
    { id: 4, name: 'القسم التعليمي' },
    { id: 5, name: 'قسم الحالات الخاصة' },
];

const postFilters = [
    <SearchInput source="title" alwaysOn />,
    <SelectInput label="فلترة حسب القسم" source="type" defaultValue={0} choices={ServiceCategories} />,
];

export const ServicesList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <FunctionField
                source="type"
                label="القسم"
                render={(rec: Services) => ServiceCategories.find(x => x.id === rec.type)?.name ?? rec.type}
            />
            <TextField source="title" label="العنوان" />
            <TextField source="description" label="الوصف" />
            <UrlField source="mediaUrl" label="رابط" target='_blank' />
        </Datagrid>
    </List>
);

export const ServicesCreate = () => (
    <Create>
        <SimpleForm>
            <SelectInput name="type" source="type" label="القسم" choices={ServiceCategories} validate={required()}
                         fullWidth />
            <TextInput name="title" source="title" label="العنوان" validate={required()} fullWidth />
            <TextInput name="description" source="description" label="الوصف" rows={2} multiline fullWidth />
            <TextInput name="mediaUrl" source="mediaUrl" label="رابط (صورة - يوتيوب)" validate={required()} fullWidth />
        </SimpleForm>
    </Create>
);

const ServiceTitle = () => {
    const record = useRecordContext();
    return <span>
        الخدمة {record ? `"${record.title}" | ${ServiceCategories.find(x => x.id === record.type)?.name}` : ''}
    </span>;
};

export const ServicesEdit = () => (
    <Edit title={<ServiceTitle />}>
        <SimpleForm>
            <SelectInput name="type" source="type" label="القسم" choices={ServiceCategories} validate={required()}
                         fullWidth />
            <TextInput name="title" source="title" label="العنوان" validate={required()} fullWidth />
            <TextInput name="description" source="description" label="الوصف" rows={2} multiline fullWidth />
            <TextInput name="mediaUrl" source="mediaUrl" label="رابط (صورة - يوتيوب)" validate={required()} fullWidth />
        </SimpleForm>
    </Edit>
);

