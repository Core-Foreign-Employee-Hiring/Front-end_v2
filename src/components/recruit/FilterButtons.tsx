'use client'

import { DropboxArrowDownIcon, DropboxArrowUpIcon } from '@/assets/svgComponents'
import { useState } from 'react'
import VisaFilter from '@/components/filter/VisaFilter'
import { ContractEnumType, JobCategoryType, JobRoleType, LanguageType, RegionType, VisaType } from '@/types/recruit'
import { useRecruitStore } from '@/store/recruitStore'
import JobRoleFilter from '@/components/filter/JobRoleFilter'
import LanguageFilter from '@/components/filter/LanguageFilter'
import RegionFilter from '@/components/filter/RegionFilter'
import ContractFilter from '@/components/filter/ContractFilter'
import { convertEnumToKorContractType } from '@/utils/recruit'

export default function FilterButtons() {
  const setState = useRecruitStore((state) => state.setState)
  /**
   * 비자 필터 관련 state
   */
  const selectedVisaFilterContentList = useRecruitStore((state) => state.selectedVisaFilterContentList)
  const [isVisaFilterOpen, setIsVisaFilterOpen] = useState(false)
  const [selectedVisas, setSelectedVisas] = useState<VisaType[] | undefined>(undefined)

  /**
   * 직무 필터 관련 state
   */
  const selectedJobRoleFilterContentList = useRecruitStore((state) => state.selectedJobRoleFilterContentList)
  const [isJobRoleFilterOpen, setIsJobRoleFilterOpen] = useState(false)
  const [selectedJobCategory, setSelectedJobCategory] = useState<JobCategoryType | undefined>(undefined)
  const [selectedJobRoles, setSelectedJobRoles] = useState<JobRoleType[] | undefined>(undefined)

  /**
   * 언어 필터 관련 state
   */
  const selectedLanguageFilterContentList = useRecruitStore((state) => state.selectedLanguageFilterContentList)
  const [isLanguageFilterOpen, setIsLanguageFilterOpen] = useState(false)
  const [selectedLanguages, setSelectedLanguages] = useState<LanguageType[] | undefined>(undefined)

  /**
   * 지역 필터 관련 state
   */
  const selectedRegionFilterContentList = useRecruitStore((state) => state.selectedRegionFilterContentList)
  const [isRegionFilterOpen, setIsRegionFilterOpen] = useState(false)
  const [selectedRegions, setSelectedRegions] = useState<RegionType[] | undefined>(undefined)

  /**
   * 계약형태 필터 관련 state
   */
  const selectedContractFilterContent = useRecruitStore((state) => state.selectedContractFilter)
  const [isContractFilterOpen, setIsContractFilterOpen] = useState(false)
  const [selectedContract, setSelectedContract] = useState<ContractEnumType | undefined>(undefined)

  const deleteVisas = (selectedVisa: VisaType) => {
    setSelectedVisas((prev) => prev?.filter((visa) => visa !== selectedVisa))
  }

  const addVisas = (selectedVisa: VisaType) => {
    setSelectedVisas((prev) => {
      const current = prev || []

      if (current.includes(selectedVisa)) {
        return current.filter((visa) => visa !== selectedVisa)
      }

      if (current.length >= 5) return prev

      return [...current, selectedVisa]
    })
  }

  const onVisaFilterApply = () => {
    setState({ selectedVisaFilterContentList: selectedVisas })
    onVisaClose()
  }

  const onVisaFilterReset = () => {
    setSelectedVisas(undefined)
    setState({ selectedVisaFilterContentList: [] })
    onVisaClose()
  }

  const onVisaClose = () => {
    setIsVisaFilterOpen(!isVisaFilterOpen)
  }

  const deleteJobRoles = (selectedJobRole: JobRoleType) => {
    setSelectedJobRoles((prev) => prev?.filter((role) => role !== selectedJobRole))
  }

  const addJobRoles = (selectedJobRole: JobRoleType) => {
    setSelectedJobRoles((prev) => {
      const current = prev || []

      if (current.includes(selectedJobRole)) {
        return current.filter((role) => role !== selectedJobRole)
      }

      if (current.length >= 5) return prev

      return [...current, selectedJobRole]
    })
  }

  const onJobRoleApply = () => {
    setState({ selectedJobRoleFilterContentList: selectedJobRoles })
    onJobRoleClose()
  }

  const onJobRoleReset = () => {
    setSelectedJobCategory(undefined)
    setSelectedJobRoles(undefined)
    setState({ selectedJobRoleFilterContentList: [] })
    onJobRoleClose()
  }

  const onJobRoleClose = () => {
    setIsJobRoleFilterOpen(!isJobRoleFilterOpen)
  }

  const deleteLanguages = (selectedLanguage: LanguageType) => {
    setSelectedLanguages((prev) => prev?.filter((language) => language !== selectedLanguage))
  }

  const addLanguages = (selectedLanguage: LanguageType) => {
    setSelectedLanguages((prev) => {
      const current = prev || []

      if (current.includes(selectedLanguage)) {
        return current.filter((language) => language !== selectedLanguage)
      }

      if (current.length >= 5) return prev

      return [...current, selectedLanguage]
    })
  }

  const onLanguageApply = () => {
    setState({
      selectedLanguageFilterContentList: selectedLanguages,
    })
    onLanguageClose()
  }

  const onLanguageReset = () => {
    setSelectedLanguages(undefined)
    setState({
      selectedLanguageFilterContentList: [],
    })
    onLanguageClose()
  }

  const onLanguageClose = () => {
    setIsLanguageFilterOpen(!isLanguageFilterOpen)
  }

  const deleteRegions = (selectedRegion: RegionType) => {
    setSelectedRegions((prev) => prev?.filter((region) => region !== selectedRegion))
  }

  const addRegions = (selectedRegion: RegionType) => {
    setSelectedRegions((prev) => {
      const current = prev || []

      if (current.includes(selectedRegion)) {
        return current.filter((region) => region !== selectedRegion)
      }

      if (current.length >= 3) return prev

      return [...current, selectedRegion]
    })
  }

  const onRegionFilterApply = () => {
    setState({ selectedRegionFilterContentList: selectedRegions })
    onRegionClose()
  }

  const onRegionFilterReset = () => {
    setSelectedRegions(undefined)
    setState({ selectedRegionFilterContentList: [] })
    onRegionClose()
  }

  const onRegionClose = () => {
    setIsRegionFilterOpen(!isRegionFilterOpen)
  }

  const deleteContract = () => {
    setSelectedContract(undefined)
  }

  const addContract = (selectedContract: ContractEnumType) => {
    setSelectedContract((prev) => (prev === selectedContract ? undefined : selectedContract))
  }

  const onContractFilterApply = () => {
    setState({ selectedContractFilter: selectedContract })
    onContractClose()
  }

  const onContractFilterReset = () => {
    setSelectedContract(undefined)
    setState({ selectedContractFilter: undefined })
    onContractClose()
  }

  const onContractClose = () => {
    setIsContractFilterOpen(!isContractFilterOpen)
  }

  return (
    <div className="flex gap-x-2 overflow-x-scroll">
      {isVisaFilterOpen && (
        <VisaFilter
          addVisas={addVisas}
          deleteVisas={deleteVisas}
          onReset={onVisaFilterReset}
          selectedVisas={selectedVisas}
          onApply={onVisaFilterApply}
          onClose={onVisaClose}
        />
      )}
      {isJobRoleFilterOpen && (
        <JobRoleFilter
          selectedJobRoles={selectedJobRoles}
          onClose={onJobRoleClose}
          deleteJobRoles={deleteJobRoles}
          setSelectedJobCategory={setSelectedJobCategory}
          addJobRoles={addJobRoles}
          onReset={onJobRoleReset}
          onApply={onJobRoleApply}
          selectedCategory={selectedJobCategory}
        />
      )}
      {isLanguageFilterOpen && (
        <LanguageFilter
          addLanguages={addLanguages}
          onReset={onLanguageReset}
          onClose={onLanguageClose}
          deleteLanguages={deleteLanguages}
          selectedLanguages={selectedLanguages}
          onApply={onLanguageApply}
        />
      )}
      {isRegionFilterOpen && (
        <RegionFilter
          onClose={onRegionClose}
          onReset={onRegionFilterReset}
          onApply={onRegionFilterApply}
          selectedRegions={selectedRegions}
          addRegions={addRegions}
          deleteRegions={deleteRegions}
        />
      )}
      {isContractFilterOpen && (
        <ContractFilter
          onApply={onContractFilterApply}
          onReset={onContractFilterReset}
          onClose={onContractClose}
          addContract={addContract}
          deleteContract={deleteContract}
          selectedContract={selectedContract}
        />
      )}
      <button
        onClick={onVisaClose}
        className="border-gray2 flex h-[36px] items-center gap-x-2 rounded-[12px] border px-4 whitespace-nowrap"
      >
        <div className="button text-gray5 flex items-center gap-x-1">
          비자
          {selectedVisaFilterContentList.length === 0 ? null : (
            <div className="badge-sm bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
              {selectedVisaFilterContentList.length}
            </div>
          )}
        </div>
        {isVisaFilterOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </button>

      <button
        onClick={onJobRoleClose}
        className="border-gray2 flex h-[36px] items-center gap-x-2 rounded-[12px] border px-4 whitespace-nowrap"
      >
        <div className="button text-gray5 flex items-center gap-x-1">
          직무
          {selectedJobRoleFilterContentList.length === 0 ? null : (
            <div className="badge-sm bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
              {selectedJobRoleFilterContentList.length}
            </div>
          )}
        </div>
        {isJobRoleFilterOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </button>

      <button
        onClick={onLanguageClose}
        className="border-gray2 flex h-[36px] items-center gap-x-2 rounded-[12px] border px-4 whitespace-nowrap"
      >
        <div className="button text-gray5 flex items-center gap-x-1">
          관련 언어
          {selectedLanguageFilterContentList.length === 0 ? null : (
            <div className="badge-sm bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
              {selectedLanguageFilterContentList.length}
            </div>
          )}
        </div>
        {isLanguageFilterOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </button>

      <button
        onClick={onRegionClose}
        className="border-gray2 flex h-[36px] items-center gap-x-2 rounded-[12px] border px-4 whitespace-nowrap"
      >
        <div className="button text-gray5 flex items-center gap-x-1">
          근무 지역
          {selectedRegionFilterContentList.length === 0 ? null : (
            <div className="badge-sm bg-main flex h-[20px] w-[20px] items-center justify-center rounded-full text-white">
              {selectedRegionFilterContentList.length}
            </div>
          )}
        </div>
        {isRegionFilterOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </button>

      <button
        onClick={onContractClose}
        className={`${selectedContractFilterContent === undefined ? 'text-gray5 border-gray2' : 'text-main border-gray2'} flex h-[36px] items-center gap-x-2 rounded-[12px] border px-4 whitespace-nowrap`}
      >
        <p className="button">
          {selectedContractFilterContent === undefined
            ? '계약형태'
            : convertEnumToKorContractType(selectedContractFilterContent)}
        </p>
        {isContractFilterOpen ? (
          <DropboxArrowUpIcon width={20} height={20} />
        ) : (
          <DropboxArrowDownIcon width={20} height={20} />
        )}
      </button>
    </div>
  )
}
