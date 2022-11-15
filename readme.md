staleTime: 데이터가 fresh 상태에서 stale상태까지의 시간, 기본값은 0s라서 꼭 설정해줘야함! <br />
fresh상태일 땐 unmount 후 mount되어도 refetching하지 않고 캐싱된 값을 그대로 가져옴 <br />
cacheTime: 쿼리 인스턴스가 unmount되면 해당 쿼리는 inactive상태가 되는데 그 때부터 cacheTime 지나면 GC에 의해 해제됨. <br />
cacheTime이 지나지 않고 다시 mount가 될 때 stale하다면 데이터를 fetch하고 그 동안 캐싱되어있는 데이터를 보여줌 <br />
기본값이 Infinity임
