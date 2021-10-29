from rssReader.models import ADsCode

def management(request):
    try:
        options = ADsCode.objects.get(access_name="admin")
    except:
        options = None
    return {
        'options': options,
    }