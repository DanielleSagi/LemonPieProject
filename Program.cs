
var builder = WebApplication.CreateBuilder(args);
var app = builder.Build();

// כאשר מקבלים פקודה ריקה (/) אז אוטומטית תחפש את הקובץ index.html ותחזיר אותו 
app.UseDefaultFiles();

// מאפשר לשרת להגיש קבצים מתוך תיקיית wwwroot (כמו CSS, JS, תמונות)
app.UseStaticFiles();

float feedback_sum = 0;
float number_of_feedbacks = 0;

app.MapPost("/api/updateRating", (UserRatingInput input) =>
{
    number_of_feedbacks++;
    int rating = input.Value;

    feedback_sum += rating;
    float new_feedback_average = feedback_sum / number_of_feedbacks;

    return Results.Ok(new { response = "Feedback average is "+new_feedback_average });
});

app.Run();

public record UserRatingInput(int Value);