import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    ImageField,
    ImageInput,
    List,
    NumberField,
    NumberInput,
    required,
    SearchInput,
    SimpleForm,
    TextField,
    TextInput,
    useRecordContext
} from "react-admin";
import { InputAdornment } from "@mui/material";
import { generateImagePreview } from "./index";
import { currencyDisplayOptions } from "@/components/admin/utils";

const postFilters = [
    <SearchInput source="title" alwaysOn />,
];

export const CampaignsList = () => (
    <List filters={postFilters}>
        <Datagrid rowClick="edit">
            <TextField source="title" label='العنوان' />
            <TextField source="description" label='الوصف' />
            <NumberField source="target" label='المبلغ المطلوب' options={currencyDisplayOptions} />
            <NumberField source="cash" label='المبلغ المجموع' options={currencyDisplayOptions} />
            <DateField source="createdAt" label='تاريخ الإنشاء' />
        </Datagrid>
    </List>
);

export const CampaignsCreate = () => (
    <Create>
        <SimpleForm defaultValues={{ target: 0, cash: 0 }}>
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
            <div style={{ display: 'flex', gap: '1rem' }}>
                <NumberInput
                    name="target"
                    source="target"
                    label="المبلغ المطلوب"
                    validate={required()}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
                <NumberInput
                    name="cash"
                    source="cash"
                    label="المبلغ المجموع"
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
            </div>
            <TextInput name="mediaUrl" source="mediaUrl" label="رابط (صورة - يوتيوب)" fullWidth />
            <ImageInput name='image' source='image' label='صورة'>
                <ImageField source="src" title="title" />
            </ImageInput>
        </SimpleForm>
    </Create>
);

const CampaignTitle = () => {
    const record = useRecordContext();
    return <span>حملة {record ? `"${record.title}"` : ''}</span>;
};

export const CampaignEdit = () => (
    <Edit title={<CampaignTitle />}>
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
            <div style={{ display: 'flex', gap: '1rem' }}>
                <NumberInput
                    name="target"
                    source="target"
                    label="المبلغ المطلوب"
                    validate={required()}
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
                <NumberInput
                    name="cash"
                    source="cash"
                    label="المبلغ المجموع"
                    InputProps={{ startAdornment: <InputAdornment position="start">$</InputAdornment> }}
                />
            </div>
            <TextInput name="mediaUrl" source="mediaUrl" label="رابط (صورة - يوتيوب)" fullWidth />
            <ImageInput name='image' source='image' label='صورة' format={generateImagePreview}>
                <ImageField source="src" title="title" />
            </ImageInput>
            <DateInput
                name="createdAt"
                source="createdAt"
                label='تاريخ الإنشاء'
                InputProps={{ readOnly: true }}
            />
        </SimpleForm>
    </Edit>
);