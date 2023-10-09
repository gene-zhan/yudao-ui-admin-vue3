import request from '@/config/axios'
import dayjs from 'dayjs'
import { TradeStatisticsComparisonRespVO } from '@/api/mall/statistics/trade'
import { formatDate } from '@/utils/formatTime'

/** 会员分析 Request VO */
export interface MemberAnalyseReqVO {
  times: [dayjs.ConfigType, dayjs.ConfigType]
}

/** 会员分析 Response VO */
export interface MemberAnalyseRespVO {
  visitorCount: number
  orderUserCount: number
  payUserCount: number
  atv: number
  comparison: TradeStatisticsComparisonRespVO<MemberAnalyseComparisonRespVO>
}

/** 会员分析对照数据 Response VO */
export interface MemberAnalyseComparisonRespVO {
  userCount: number
  activeUserCount: number
  rechargeUserCount: number
}

/** 会员地区统计 Response VO */
export interface MemberAreaStatisticsRespVO {
  areaId: number
  areaName: string
  userCount: number
  orderCreateCount: number
  orderPayCount: number
  orderPayPrice: number
}

/** 会员性别统计 Response VO */
export interface MemberSexStatisticsRespVO {
  sex: number
  userCount: number
}

/** 会员统计 Response VO */
export interface MemberSummaryRespVO {
  userCount: number
  rechargeUserCount: number
  rechargePrice: number
  expensePrice: number
}

/** 会员终端统计 Response VO */
export interface MemberTerminalStatisticsRespVO {
  terminal: number
  userCount: number
}

// 查询会员统计
export const getMemberSummary = () => {
  return request.get<MemberSummaryRespVO>({
    url: '/statistics/member/summary'
  })
}

// 查询会员分析数据
export const getMemberAnalyse = (params: MemberAnalyseReqVO) => {
  return request.get<MemberAnalyseRespVO>({
    url: '/statistics/member/analyse',
    params: { times: [formatDate(params.times[0]), formatDate(params.times[1])] }
  })
}

// 按照省份，查询会员统计列表
export const getMemberAreaStatisticsList = () => {
  return request.get<MemberAreaStatisticsRespVO[]>({
    url: '/statistics/member/get-area-statistics-list'
  })
}

// 按照性别，查询会员统计列表
export const getMemberSexStatisticsList = () => {
  return request.get<MemberSexStatisticsRespVO[]>({
    url: '/statistics/member/get-sex-statistics-list'
  })
}

// 按照终端，查询会员统计列表
export const getMemberTerminalStatisticsList = () => {
  return request.get<MemberTerminalStatisticsRespVO[]>({
    url: '/statistics/member/get-terminal-statistics-list'
  })
}
