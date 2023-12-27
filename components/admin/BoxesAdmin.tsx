import {
    BooleanField,
    BooleanInput,
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    List,
    minValue,
    NumberField,
    NumberInput,
    required,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext,
} from 'react-admin';
import { currencyDisplayOptions } from "@/components/admin/utils";
import { InputAdornment } from "@mui/material";

export const BoxesList = () => (
    <List>
        <Datagrid rowClick="edit">
            <TextField source="name" label='اسم الصندوق' />
            <NumberField source="cash" label='المبلغ المجموع' options={currencyDisplayOptions} />
            <BooleanField source="isActive" label='فعال' />
            <DateField source="createdAt" label='تاريخ الإنشاء' />
        </Datagrid>
    </List>
);

const BoxTitle = () => {
    const record = useRecordContext();
    return <span>الصندوق {record ? `"${record.name}"` : ''}</span>;
};

export const BoxesEdit = () => (
    <Edit title={<BoxTitle />}>
        <SimpleForm>
            <TextInput source="name" name="name" label='اسم الصندوق' validate={required()} fullWidth />
            <NumberInput source="cash" name="cash" label='المبلغ المجموع' validate={[required(), minValue(0)]} fullWidth
                         InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
            <BooleanInput source="isActive" name="isActive" label='فعال' />
            <DateInput source="createdAt" name="createdAt" label='تاريخ الإنشاء' InputProps={{ readOnly: true }} />
        </SimpleForm>
    </Edit>
);

export const BoxesCreate = () => (
    <Create>
        <SimpleForm defaultValues={{ cash: 0, isActive: true }}>
            <TextInput source="name" name="name" label='اسم الصندوق' validate={required()} fullWidth />
            <NumberInput source="cash" name="cash" label='المبلغ المجموع' validate={[required(), minValue(0)]} fullWidth
                         InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }} />
            <BooleanInput source="isActive" name="isActive" label='فعال' />
        </SimpleForm>
    </Create>
);