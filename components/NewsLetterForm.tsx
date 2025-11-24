import { Input, LoadingButton, Select, SelectOption } from '@helpwave/hightide'
import { useState } from 'react'
import { useLandingPageTranslation } from '@/i18n/useLandingPageTranslation'

const industryList = ['investment', 'hospital', 'patientCare', 'research', 'development', 'press'] as const
export type Industry = typeof industryList[number]

export type NewsLetterFormType = {
  firstname: string,
  lastname: string,
  email: string,
  company: string,
  industry?: Industry,
}

export type NewsLetterFormProps = Partial<NewsLetterFormType> & {
  onSubmit?: (formState: NewsLetterFormType) => Promise<void>,
}

export const NewsLetterForm = ({
                                 firstname = '',
                                 lastname = '',
                                 email = '',
                                 company = '',
                                 industry,
                                 onSubmit = () => Promise.resolve(),
                               }: NewsLetterFormProps) => {
  const translation = useLandingPageTranslation()
  const [isLoading, setLoading] = useState(false)
  const [showThankYouMessage, setShowThankYouMessage] = useState(false)
  const [formState, setFormState] = useState<NewsLetterFormType>({
    firstname,
    lastname,
    email,
    company,
    industry,
  })

  return (
    <div className="rounded-lg py-2 px-4 w-full bg-[#FFFFFFEE] border-2">
      <div className="col">
        <span className="typography-title-md">{translation('titleNewsLetterForm')}</span>
        <span className="text-description">{translation('subtitleNewsLetterForm')}</span>
        <div className="col my-2 gap-y-1">
          <form>
            <Input
              id="email"
              value={formState.email}
              // label={{ name: `${translation('email')}*` }}
              onChangeText={text => setFormState(prevState => ({
                ...prevState,
                email: text
              }))}
              onEditCompleted={text => setFormState(prevState => ({
                ...prevState,
                email: text
              }))}
              maxLength={255}
              required={true}
              className="!desktop:w-3/5 !max-w-[300px]"
            />
            <div className="desktop:flex-row max-tablet:col gap-x-4">
              <Input
                id="firstname"
                value={formState.firstname}
                // label={{ name: translation('firstname') }}
                onChangeText={text => setFormState(prevState => ({
                  ...prevState,
                  firstname: text
                }))}
                onEditCompleted={text => setFormState(prevState => ({
                  ...prevState,
                  firstname: text
                }))}
                maxLength={255}
              />
              <Input
                id="lastname"
                value={formState.lastname}
                // label={{ name: `${translation('lastname')}*` }}
                onChangeText={text => setFormState(prevState => ({
                  ...prevState,
                  lastname: text
                }))}
                onEditCompleted={text => setFormState(prevState => ({
                  ...prevState,
                  lastname: text
                }))}
                maxLength={255}
                required={true}
              />
            </div>
            <div className="desktop:flex-row max-tablet:col gap-x-4">
              <Input
                id="company"
                value={formState.company}
                // label={{ name: translation('company') }}
                onChangeText={text => setFormState(prevState => ({
                  ...prevState,
                  company: text
                }))}
                onEditCompleted={text => setFormState(prevState => ({
                  ...prevState,
                  company: text
                }))}
                maxLength={255}
                className="!max-w-[300px]"
              />
              <Select
                // label={{ name: translation('industry'), labelType: 'labelSmall' }}
                value={formState.industry}
                onValueChanged={industry => setFormState(prevState => ({
                  ...prevState,
                  industry: industry as Industry
                }))}
                buttonProps={{ className: '!w-full !max-w-[300px]' }}
              >
                {industryList.map(value => (
                  <SelectOption key={value} value={value}>
                    {translation(value)}
                  </SelectOption>
                ))}
              </Select>
            </div>
            <div className="row justify-end mt-4">
              {
                showThankYouMessage ? (
                  <p>{translation('thankYou')}</p>
                ) : (
                  <LoadingButton type="submit" isLoading={isLoading} onClick={() => {
                    if (!formState.email || !formState.lastname) return

                    setLoading(true)
                    onSubmit(formState).finally(() => {
                      setLoading(false)
                      setShowThankYouMessage(true)
                    })
                  }} size="medium" className="min-w-[120px] w-fit">
                    {translation('callToAction')}
                  </LoadingButton>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
