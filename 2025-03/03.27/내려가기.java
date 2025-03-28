import java.io.BufferedReader;
import java.io.InputStreamReader;
import java.io.IOException;
import java.util.StringTokenizer;

public class Main {
  public static void main(String[] args) throws IOException {
    BufferedReader br = new BufferedReader(new InputStreamReader(System.in));
    int N = Integer.parseInt(br.readLine());
    
    StringTokenizer st = new StringTokenizer(br.readLine());
    int[] dpMax = new int[3];
    int[] dpMin = new int[3];
    for (int j = 0; j < 3; j++) {
      int num = Integer.parseInt(st.nextToken());
      dpMax[j] = num;
      dpMin[j] = num;
    }
    
    for (int i = 1; i < N; i++) {
      st = new StringTokenizer(br.readLine());
      int a = Integer.parseInt(st.nextToken());
      int b = Integer.parseInt(st.nextToken());
      int c = Integer.parseInt(st.nextToken());
      
      int[] newMax = new int[3];
      int[] newMin = new int[3];
      
      newMax[0] = a + Math.max(dpMax[0], dpMax[1]);
      newMin[0] = a + Math.min(dpMin[0], dpMin[1]);
      
      newMax[1] = b + Math.max(dpMax[0], Math.max(dpMax[1], dpMax[2]));
      newMin[1] = b + Math.min(dpMin[0], Math.min(dpMin[1], dpMin[2]));
      
      newMax[2] = c + Math.max(dpMax[1], dpMax[2]);
      newMin[2] = c + Math.min(dpMin[1], dpMin[2]);
      
      dpMax = newMax;
      dpMin = newMin;
    }
    
    int maxScore = Math.max(dpMax[0], Math.max(dpMax[1], dpMax[2]));
    int minScore = Math.min(dpMin[0], Math.min(dpMin[1], dpMin[2]));
    
    System.out.println(maxScore + " " + minScore);
  }
}