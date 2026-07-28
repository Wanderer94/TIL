# [풀이 유형] 문제 제목 (문제 번호/플랫폼)

- **난이도:** Gold III / Lv.3
- **풀이 시간:** 28분
- **성공 여부:** 자력 성공 / 힌트 참조
- **문제 링크:** [링크 입력]

---

## 1. 핵심 아이디어 (Key Insight)

> 이 문제를 해결하는 결정적 열쇠는 무엇인가?

- $N \le 200,000$ 이므로 $O(N^2)$ 브루트포스는 불가능함. $O(N \log N)$ 인 이분 탐색(Parametric Search) 적용.
- 조건 만족 여부를 판단할 때, 단순 루프 대신 누적 합 배열을 활용함.

---

## 2. 시간/공간 복잡도 분석

- **시간 복잡도:** $O(N \log M)$ (이분 탐색 $O(\log M)$ $\times$ 조건 검사 $O(N)$)
- **공간 복잡도:** $O(N)$ (입력 배열 및 visited 저장)

---

## 3. 복습할 핵심 코드 (Template & Solution)

```python
def solution(n, m, data):
    start, end = 1, max(data)
    result = 0

    while start <= end:
        mid = (start + end) // 2
        # [핵심 로직] 조건 검사
        if check(mid, data) >= m:
            result = mid  # 최적해 기록
            start = mid + 1
        else:
            end = mid - 1

    return result
```
