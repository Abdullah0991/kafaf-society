import {
    Create,
    Datagrid,
    DateField,
    DateInput,
    Edit,
    FunctionField,
    List,
    NumberField,
    NumberInput,
    required,
    SimpleForm
} from "react-admin";
import { Statistics } from "@prisma/client";

export const StatisticsList = () => (
    <List>
        <Datagrid rowClick="edit">
            <FunctionField
                label="عدد المستفيدين الكلي"
                render={(rec: Statistics) =>
                    Intl.NumberFormat()
                        .format(rec.activity + rec.food + rec.clothes + rec.medical + rec.logistic + rec.emergency)
                }
            />
            <NumberField source="medical" label='البرنامج الطبي' textAlign='center' />
            <NumberField source="activity" label='الأنشطة والحالات الخاصة' textAlign='center' />
            <NumberField source="clothes" label='صالة الألبسة' textAlign='center' />
            <NumberField source="emergency" label='برنامج الاستجابة الطارئة' textAlign='center' />
            <NumberField source="logistic" label='الدعم الميداني' textAlign='center' />
            <NumberField source="food" label='برنامج سوء التغذية' textAlign='center' />
            <DateField source="createdAt" label='تاريخ التعديل' />
        </Datagrid>
    </List>
);

export const StatisticsCreate = () => (
    <Create>
        <SimpleForm defaultValues={{ medical: 0, activity: 0, clothes: 0, emergency: 0, logistic: 0, food: 0 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', width: '100%' }}>
                <NumberInput
                    name='medical'
                    source='medical'
                    label='البرنامج الطبي'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='activity'
                    source='activity'
                    label='الأنشطة والحالات الخاصة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='clothes'
                    source='clothes'
                    label='صالة الألبسة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', width: '100%' }}>
                <NumberInput
                    name='emergency'
                    source='emergency'
                    label='برتامج الاستجابة الطارئة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='logistic'
                    source='logistic'
                    label='الدعم الميداني'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='food'
                    source='food'
                    label='برنامج سوء التغذية'
                    min={0}
                    validate={required()}
                    fullWidth
                />
            </div>
        </SimpleForm>
    </Create>
);

export const StatisticsEdit = () => (
    <Edit>
        <SimpleForm>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', width: '100%' }}>
                <NumberInput
                    name='medical'
                    source='medical'
                    label='البرنامج الطبي'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='activity'
                    source='activity'
                    label='الأنشطة والحالات الخاصة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='clothes'
                    source='clothes'
                    label='صالة الألبسة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '1rem', width: '100%' }}>
                <NumberInput
                    name='emergency'
                    source='emergency'
                    label='برتامج الاستجابة الطارئة'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='logistic'
                    source='logistic'
                    label='الدعم الميداني'
                    min={0}
                    validate={required()}
                    fullWidth
                />
                <NumberInput
                    name='food'
                    source='food'
                    label='برنامج سوء التغذية'
                    min={0}
                    validate={required()}
                    fullWidth
                />
            </div>
            <DateInput name='createdAt' source='createdAt' label='تاريخ التعديل' InputProps={{ readOnly: true }} />
        </SimpleForm>
    </Edit>
);