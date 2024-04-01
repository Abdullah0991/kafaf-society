import {
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    Edit,
    FunctionField,
    ImageField,
    ImageInput,
    List,
    required,
    SearchInput,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext
} from "react-admin";
import { Partners } from ".prisma/client";
import { generateImagePreview } from "@/components/admin/index";

const postFilters = [
    <SearchInput source="name" alwaysOn />,
    <BooleanInput label="فلترة حسب الإظهار" source="visible" defaultValue={true}/>
];

const api = process.env.NEXT_PUBLIC_API_URL;

export const PartnersList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <FunctionField
                label="الصورة"
                render={(record: Partners) => <img src={`${api}/files?n=${record.image}`} alt='i' width={120} />}
            />
            <TextField source="name" label='الاسم' />
            <BooleanField source="visible" label="ظاهر" />
            <DateField source="createdAt" label='تاريخ الإنشاء' />
        </Datagrid>
    </List>
);

export const PartnersCreate = () => (
    <Create>
        <SimpleForm defaultValues={{ visible: true }}>
            <TextInput name="name" source="name" label="الاسم" fullWidth />
            <BooleanInput name="visible" source="visible" label="إظهار" />
            <ImageInput name='image' source='image' label='صورة' validate={required()}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

const PartnerTitle = () => {
    const record = useRecordContext();
    return <span>الشريك {record ? `"${record.name}"` : ''}</span>;
};

export const PartnersEdit = () => (
    <Edit title={<PartnerTitle />}>
        <SimpleForm>
            <TextInput name="name" source="name" label="الاسم" fullWidth />
            <BooleanInput name="visible" source="visible" label="إظهار" />
            <ImageInput name='image' source='image' label='صورة' validate={required()} format={generateImagePreview}>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Edit>
);
