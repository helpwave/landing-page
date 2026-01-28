import { Button, Input, Select, SelectOption } from '@helpwave/hightide'
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
              onChange={(e) => setFormState(prevState => ({
                ...prevState,
                email: e.target.value
              }))}
              maxLength={255}
              required={true}
              className="!desktop:w-3/5 !max-w-[300px]"
            />
            <div className="desktop:flex-row max-tablet:col gap-x-4">
              <Input
                id="firstname"
                value={formState.firstname}
                onChange={(e) => setFormState(prevState => ({
                  ...prevState,
                  firstname: e.target.value
                }))}
                maxLength={255}
              />
              <Input
                id="lastname"
                value={formState.lastname}
                onChange={(e) => setFormState(prevState => ({
                  ...prevState,
                  lastname: e.target.value
                }))}
                maxLength={255}
                required={true}
              />
            </div>
            <div className="desktop:flex-row max-tablet:col gap-x-4">
              <Input
                id="company"
                value={formState.company}
                onChange={(e) => setFormState(prevState => ({
                  ...prevState,
                  company: e.target.value
                }))}
                maxLength={255}
                className="!max-w-[300px]"
              />
              <Select
                value={formState.industry}
                onValueChange={(industry) => setFormState(prevState => ({
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
                  <Button
                    type="submit"
                    color="primary"
                    coloringStyle="solid"
                    layout="default"
                    disabled={isLoading}
                    onClick={() => {
                      if (!formState.email || !formState.lastname) return

                      setLoading(true)
                      onSubmit(formState).finally(() => {
                        setLoading(false)
                        setShowThankYouMessage(true)
                      })
                    }}
                    size="md"
                    className="min-w-[120px] w-fit"
                  >
                    {isLoading ? translation('loading') || 'Loading...' : translation('callToAction')}
                  </Button>
                )
              }
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
