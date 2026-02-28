import {computed} from "vue";
import * as yup from "yup";
import { useI18n } from "vue-i18n";


export function useValidSchema() {
    const { t, locale } = useI18n({useScope: 'global'});
    const schema = computed(() =>
        yup.object({
                name: yup.string()
                    .min(3, `${t('errors.name.min')}`)
                    .required(t('errors.name.required')),
                email: yup.string()
                    .email(t('errors.email.regex'))
                    .required(t('errors.email.required')),
                dateOfBirth: yup.date()
                    .required(t('errors.dateOfBirth')),
                address: yup.string()
                    .required(t('errors.address')),
                phones: yup.array()
                    .required(t('errors.phones')),
            }
        )
    )

    return { schema };
}

